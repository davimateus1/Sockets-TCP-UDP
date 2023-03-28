const dgram = require("dgram");

const udpServer = dgram.createSocket("udp4");
udpServer.on("listening", () => {
  const address = udpServer.address();
  console.log(`Servidor UDP rodando em ${address.address}:${address.port}`);
});

udpServer.on("message", (data, remote) => {
  console.log("Mensagem UDP recebida:", data.toString());

  const message = Buffer.from("Resposta UDP recebida:\n");
  udpServer.send(
    message,
    0,
    message.length,
    remote.port,
    remote.address,
    (err) => {
      if (err) console.error("Erro ao enviar resposta:", err);
    }
  );
});

const udpPort = 8001;
udpServer.bind(udpPort);

module.exports = udpServer;
