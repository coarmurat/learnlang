import type { Metadata } from 'next'
import TextList from './textList'

export const metadata: Metadata = {
  title: 'Text List',
  description: '',
}

export default function TextListPage() {

  return <TextList/>
}
