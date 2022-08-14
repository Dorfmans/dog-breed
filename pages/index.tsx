import { useRouter } from 'next/router'

function Index() {
  const router = useRouter()

  if (typeof window !== 'undefined') {
    router.push('/register')
  }
}

export default Index