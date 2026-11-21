import { Code2, Brain, BarChart3, Layers, MessageSquare, Leaf, BookOpen, Presentation, Award, Keyboard, Circle } from 'lucide-react'
const map = { Code2, Brain, BarChart3, Layers, MessageSquare, Leaf, BookOpen, Presentation, Award, Keyboard }
export default function Icon({ name, ...p }) { const C = map[name] || Circle; return <C aria-hidden="true" {...p} /> }
