#!/usr/bin/env node

import { join } from 'path'
import inquirer from 'inquirer'

import { copyDirectory } from './utils'

const templateDir = join(__dirname, '../templates')

const choices = [{ name: 'Next.js', value: 'nextjs' }] as const

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
  const sourceDir = join(templateDir, selected)

  if (selected === 'nextjs') {
    copyDirectory(sourceDir, process.cwd())
  } else {
    throw new Error(`"${selected}" is not implemented`)
  }
}

main()
