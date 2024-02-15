import { useFetch } from "../hooks/useFetch"

export const Greeting = () => {
    const url='http://127.0.0.1:4000/random_greeting'
    const { data } = useFetch({url});

  return (
    <div>
        {data.content}
      
    </div>
  )
}
