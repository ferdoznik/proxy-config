function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*beta.platacard.*") ||
      shExpMatch(host, "*beta.diftech.*") ||
      shExpMatch(host, "*sandbox.platacard.*") ||
      shExpMatch(host, "*dev.beta.diftech.*") ||
      shExpMatch(host, "*mock-beta.platacard.*")) ||
      shExpMatch(host, "*mock.beta.diftech.org")) {
    return "PROXY 192.168.0.45:9090; DIRECT";
  }
  return "DIRECT";
}
