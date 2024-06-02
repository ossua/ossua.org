const ROBOTS_TXT = `User-agent: *
Disallow:
`;

export const loader = () => {
  return new Response(ROBOTS_TXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
