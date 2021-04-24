import App from './app'

const PORT = process.env.PORT || 3385

const server = new App().server

server.listen(PORT, () => process.stdout.write(`Server is running on port: ${PORT}`))
