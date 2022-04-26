import Results from "../../components/sections/Results"
import dynamic from "next/dynamic"

const DynamicResult = dynamic(
  () => import("../../components/sections/Results"),
  {
    ssr: false
  }
)

export default function AfterSearch() {
    return (
      <>
        <DynamicResult />
      </>
    )
  }