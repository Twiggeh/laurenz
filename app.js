import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

fastify.get('/coinflip', async function handler () {
	return Math.random() > 0.5 ? 1 : 0; 
})

try {
  await fastify.listen({ port: 80, host: "0.0.0.0" })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
