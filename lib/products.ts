export type Product = {
  slug: string
  name: string
  price: string
  image: string
  cta: string
  // Live store product page that retains the working checkout
  buyUrl: string
  description: string
  kitTitle?: string
  kit?: string[]
  note?: string
}

export const products: Product[] = [
  {
    slug: 'milestonesmyway',
    name: 'Milestones My Way: A Social and Mental Health Journal',
    price: '$18.99',
    image: '/images/product-journal.png',
    cta: 'Add to Cart',
    buyUrl: 'https://www.kinst.net/shop/milestonesmyway',
    description:
      'Milestones My Way: A Social and Mental Health Journal was created to enrich, enhance, and encourage readers to maximize growth and development within their daily lives. This journal will provide an array of social and mental concepts to restore, reshape, and restructure an individual\u2019s lifestyle, thoughts, and emotional pain. In addition to the stated measures, it also addresses life challenges and aids in both long and short term goal setting.',
  },
  {
    slug: 'milestones-my-way-refresh-curriculum',
    name: 'Milestones My Way (REFRESH) Curriculum',
    price: 'from $3,500.00',
    image: '/images/product-refresh.png',
    cta: 'Purchase',
    buyUrl: 'https://www.kinst.net/shop/milestones-my-way-refresh-curriculum',
    description:
      'Milestones My Way REFRESH Curriculum is a social and emotional learning initiative produced to motivate, encourage and inspire third-twelfth grade students to become effective communicators. This course of study was produced to provide dedicated and intentional quality educational strategies in content areas of reading, writing, math, science, and social studies. Through partnerships and collaborations interventions will be centered on art, music, wraparound services and the Cognitive Behavior Therapy approach. Milestones My Way REFRESHED curriculum will provide growth and development toward promoting, understanding, relations, acceptance, and healing toward daily occurrences through "The Real Life Approach".',
    kitTitle: 'Milestones My Way curriculum also has a kit. The components of the kit include:',
    kit: [
      'Social/emotional flash cards',
      'Anxiety/stressor balls',
      'Anxiety/stressors glitter balls',
      'Social/emotional bingo',
      'Matching game',
    ],
    note: 'The price: contact me for pricing. Pricing varies according to elementary/middle/high school levels.',
  },
  {
    slug: 'milestones-my-way-moppet-modules',
    name: 'Milestones My Way Moppet Modules',
    price: '$2,000.00',
    image: '/images/product-moppet.png',
    cta: 'Purchase',
    buyUrl: 'https://www.kinst.net/shop/milestones-my-way-moppet-modules',
    description:
      'Milestones My Way Moppet Modules is a social and emotional learning strategy designed to inspire, activate, and stimulate Pre K through Second Grade scholar\u2019s awareness by enhancing their communication skills. This course of instruction will provide support toward building community focus through enriching social skills, self-skills, fine motor skills, cognitive skills and emotional control.',
    kitTitle: 'Milestones My Way Moppet Modules has a social and emotional learning kit. The kit includes:',
    kit: [
      'Flash cards',
      'Matching game',
      'Anxiety balls',
      'Sensory jars',
      'Handheld sensory resources',
    ],
  },
]
