function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*beta.platacard.mx") ||
      shExpMatch(host, "*beta.diftech.*") ||
      shExpMatch(host, "*sandbox.platacard.mx") ||
      shExpMatch(host, "*dev.beta.diftech.net") ||
      shExpMatch(host, "*mock-beta.platacard.mx")) ||
      shExpMatch(host, "*mock.beta.diftech.org")) {
    return "PROXY 192.168.0.39:9090; DIRECT";
  }
  return "DIRECT";
}
