#!/usr/bin/env node

import { join } from 'path'
import inquirer from 'inquirer'

import { copyDirectory } from './utils'

const templateDir = join(__dirname, '../templates')

const choices = [
  { name: 'Next.js', value: 'nextjs' },
  { name: 'Vite', value: 'vite' },
] as const

const main = async () => {
  const { selected }: { selected: (typeof choices)[number]['value'] } =
    await inquirer.prompt([
      {
        type: 'list',
        name: 'selected',
        message: 'Please select your framework',
        choices,
      },
    ])
  if (!selected) throw new Error(`"${selected}" is not implemented`)

  copyDirectory(join(templateDir, selected), process.cwd())
}

main()
