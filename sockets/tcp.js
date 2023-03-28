const net = require("net");

const tcpServer = net.createServer((socket) => {
  console.log(
    "Cliente TCP conectado:",
    socket.remoteAddress,
    socket.remotePort
  );

  socket.on("data", (data) => {
    console.log("Mensagem TCP recebida:", data.toString());

    const message = Buffer.from("Resposta TCP recebida\n");
    socket.write(message);
  });
  socket.on("close", () => {
    console.log("Cliente TCP desconectado");
  });
});

const tcpPort = 8000;
tcpServer.listen(tcpPort, () => {
  console.log(`Servidor TCP rodando na porta ${tcpPort}...`);
});

module.exports = tcpServer;
