import { Action } from "react-fetching-library";

export const fetchEndpoints: Action = () => ({
  endpoint: "endpoint",
  method: "GET",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYXB1dGlrZXdAY3JlYXppb25pc2EuY29tIiwiYXVkIjoiXC9hcGlcL3YxXC9hdXRoZW50aWNhdGlvbiIsImVzYy5hcHAiOm51bGwsImFwaV9rZXkiOiIwcjh4NDlEcjh1Nm9taklKRDF5Ukc5N1gwSE9ST0JEYjgwdFhISTdZIiwiZXNjLnVzZXIiOjE5OTEyNCwiZXNjLm9yZyI6NDE5MiwiZXNjLm9yZ05hbWUiOiJNaWNoYWVsIFN0cmVpbmVyIFRlc3QiLCJpc3MiOiJzcGMtZnJvbnRlbmQwMDFAc3BjLWZyb250ZW5kIiwiZXhwIjoxNTY5NTg3NDk2LCJlc2Mucm9sZXMiOlsyLDNdLCJpYXQiOjE1Njk1NzMwOTZ9.rFZZFtH-U2F8mt3w6kyXTRbyOysGpLH7Zehm0tDcE9_lEzHBlIrTSyZhFbh6S5bW4SGAuTTyPQ3kV9tzqjuqag"
  }
});
