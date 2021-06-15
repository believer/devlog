import { getContent } from '../generate'

describe('#getContent', () => {
  const data = [
    {
      id: '60c32b51-33ce-4ab6-a8cf-46c52dc3b726',
      properties: { public: true },
      format: 'markdown',
      children: [],
      body: [['Paragraph', [['Break_Line']]]],
      content: 'public:: true',
    },
    {
      id: '60c32b51-d354-4ea8-ae01-683a8801ac6d',
      format: 'markdown',
      children: [
        {
          id: '60c32b52-534b-474b-9be1-382894ef91bc',
          format: 'markdown',
          children: [],
          title: [
            [
              'Plain',
              'We have some content that we want to position in the center of the screen. For this we can use ',
            ],
            [
              'Link',
              {
                url: ['Search', 'CSS Grid'],
                label: [['Plain', '']],
                full_text: '[[CSS Grid]]',
                metadata: '',
              },
            ],
            [
              'Plain',
              '. By defining fixed values at the edges of our grid template we can achieve spacing without using ',
            ],
            ['Code', 'padding'],
            ['Plain', ' when the grid resizes on a smaller screen.'],
          ],
          body: [],
          content:
            'We have some content that we want to position in the center of the screen. For this we can use [[CSS Grid]]. By defining fixed values at the edges of our grid template we can achieve spacing without using `padding` when the grid resizes on a smaller screen.',
        },
      ],
      title: [
        [
          'Plain',
          "Share your knowledge and insights. To do this in the most effective way you'll need to ",
        ],
        [
          'Link',
          {
            url: ['Search', 'Explain in plain words'],
            label: [['Plain', '']],
            full_text: '[[Explain in plain words]]',
            metadata: '',
          },
          ,
        ],
        [
          'Plain',
          '. This "forces" you to refine your thinking until you can explain the topic in the most accessible way.',
        ],
        [
          'Emphasis',
          [
            ['Bold'],
            [['Plain', ' includes the commit in question in the rebase']],
          ],
        ],
        ['Emphasis', [['Italic'], [['Plain', 'Commit B']]]],
      ],
      body: [],
      content:
        'Share your knowledge and insights. To do this in the most effective way you\'ll need to [[Explain in plain words]]. This "forces" you to refine your thinking until you can explain the topic in the most accessible way.',
    },
    {
      id: '60c32b51-6c07-4b47-8f83-5cc0c94ec9de',
      format: 'markdown',
      children: [],
      title: [],
      body: [['Horizontal_Rule']],
      content: '  ---',
    },
    {
      id: '60c32b51-0d50-4e9d-93cc-70c2b5adf914',
      format: 'markdown',
      children: [],
      title: [],
      body: [
        [
          'Src',
          {
            lines: [
              'pick 456 Commit B',
              '\n',
              'pick 789 Commit C',
              '\n',
              '\t  ',
              '\n',
              '# Commands',
              '\n',
              '# p, pick <commit> = use commit',
              '\n',
              '# e, edit <commit> = use commit, but stop for amending',
              '\n',
              '# ...',
              '\n',
            ],
            language: 'md',
            pos_meta: { start_pos: 723, end_pos: 888 },
            full_content:
              '\t  ```md\n\t  pick 456 Commit B\n\t  pick 789 Commit C\n\t  \n\t  # Commands\n\t  # p, pick <commit> = use commit\n\t  # e, edit <commit> = use commit, but stop for amending\n\t  # ...\n\t  ```\n',
          },
        ],
      ],
      content:
        '\t  ```md\npick 456 Commit B\npick 789 Commit C\n\n# Commands\n# p, pick <commit> = use commit\n# e, edit <commit> = use commit, but stop for amending\n# ...\n```',
    },
  ]

  test('renders a page', () => {
    expect(getContent(data)).toMatchSnapshot()
  })
})
