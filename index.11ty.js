class Index {
  data() {
    return {
      layout: 'default',
    }
  }

  render(data) {
    return `<section class="space-y-8">
    ${data.collections.journal
      .slice()
      .reverse()
      .map((journal) => {
        return `<article class="border-b border-gray-700 pb-8 text-sm"><h2 class="text-3xl font-semibold mb-4">${journal.data.title}</h2>
          ${journal.templateContent}</article>`
      })
      .join('\n')}
  </section>`
  }
}

module.exports = Index
