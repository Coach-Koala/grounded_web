import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import LeadForm from "./LeadForm";

const ENDPOINT = "https://demo.getgroundedhealth.com/api/leads";

async function fillAndSubmit() {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(/name/i), "Pat Doe");
  await user.type(screen.getByLabelText(/work email/i), "pat@example.com");
  await user.type(screen.getByLabelText(/company/i), "Example Co");
  await user.click(screen.getByRole("button", { name: /get your free scorecard/i }));
}

describe("LeadForm", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_LEADS_ENDPOINT", ENDPOINT);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("shows the confirmation state on a 2xx response", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 201 }));
    vi.stubGlobal("fetch", fetchMock);

    render(<LeadForm />);
    await fillAndSubmit();

    expect(await screen.findByRole("status")).toHaveTextContent(/request received/i);
    expect(fetchMock).toHaveBeenCalledWith(ENDPOINT, expect.objectContaining({ method: "POST" }));
  });

  it("fails loud with a visible error and mailto fallback on a 5xx response", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 500 }));
    vi.stubGlobal("fetch", fetchMock);

    render(<LeadForm />);
    await fillAndSubmit();

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent(/was not sent/i);
    expect(screen.getByRole("link", { name: /@/ })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:"),
    );
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("fails loud on a network error", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError("fetch failed"));
    vi.stubGlobal("fetch", fetchMock);

    render(<LeadForm />);
    await fillAndSubmit();

    expect(await screen.findByRole("alert")).toHaveTextContent(/was not sent/i);
  });

  it("fails loud when the endpoint is not configured", async () => {
    vi.stubEnv("NEXT_PUBLIC_LEADS_ENDPOINT", "");
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    render(<LeadForm />);
    await fillAndSubmit();

    expect(await screen.findByRole("alert")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("does not POST when the honeypot is filled", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();

    render(<LeadForm />);
    await user.type(screen.getByLabelText(/name/i), "Bot");
    await user.type(screen.getByLabelText(/work email/i), "bot@spam.com");
    await user.type(screen.getByLabelText(/company/i), "Spam Inc");
    await user.type(screen.getByLabelText(/website/i), "https://spam.example");
    await user.click(screen.getByRole("button", { name: /get your free scorecard/i }));

    expect(await screen.findByRole("status")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
