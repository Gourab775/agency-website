import { Card } from "@/components/ui/card"

const integrations = [
  {
    title: "Stripe",
    description: "Seamless payment processing and subscription management for your applications.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  },
  {
    title: "OpenAI",
    description: "Integrate powerful AI capabilities into your workflows and applications.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  },
  {
    title: "Supabase",
    description: "Real-time database and authentication solutions for modern applications.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
  },
  {
    title: "Vercel",
    description: "Deploy and scale your applications with enterprise-grade infrastructure.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
  },
  {
    title: "Slack",
    description: "Connect your workflows with team communication and notifications.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
  },
  {
    title: "Zapier",
    description: "Automate workflows between your favorite apps and services.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
  },
  {
    title: "Airtable",
    description: "Build custom databases and workflows with flexible data management.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  },
  {
    title: "Notion",
    description: "Integrate with collaborative workspaces and knowledge management systems.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  },
]

const Integrations = () => {
  return (
    <section className="py-32 relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-light text-balance">Integrations</h2>
        <p className="text-lg md:text-xl text-zinc-400 mb-12">Connect with the tools and platforms you already use.</p>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, i) => (
            <li key={i}>
              <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <img
                  src={integration.image || "/placeholder.svg"}
                  alt={integration.title}
                  className="w-14 h-14 object-contain"
                />
                <h3 className="mb-2 mt-4 text-lg font-medium text-white">{integration.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{integration.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Tools }
