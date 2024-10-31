import { copyFileSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

export const copyDirectory = (src: string, destination: string) => {
  mkdirSync(destination, { recursive: true })

  const entries = readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = join(src, entry.name)
    const destPath = join(destination, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath)
    } else {
      copyFileSync(srcPath, destPath)
    }
  }
}
