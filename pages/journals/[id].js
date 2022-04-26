import Detail from "../../components/sections/Detail"
import dynamic from 'next/dynamic'

const DynamicDetail = dynamic(
  () => import("../../components/sections/Detail"),
  {
    ssr: false
  }
)

export default function Details() {
    return (
      <>
        <DynamicDetail />
      </>
    )
}