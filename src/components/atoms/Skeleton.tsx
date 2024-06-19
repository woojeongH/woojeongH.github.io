import styled from "@emotion/styled"

import { Skeleton as SkeletonUi } from "~/lib/shadcn/ui/skeleton"

interface Props {
  count?: number
  showImage?: boolean
}
interface CardProps extends Pick<Props, "count"> {
  count?: number
  showImage?: boolean
}
const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export function Skeleton({ count = 3, showImage = false }: Props) {
  return (
    <SkeletonContainer>
      {Array(count)
        .fill(null)
        .map((_, index) =>
          showImage ? (
            <div key={index} className="flex items-center space-x-4">
              <SkeletonUi className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <SkeletonUi className="h-4 w-[250px]" />
                <SkeletonUi className="h-4 w-[200px]" />
              </div>
            </div>
          ) : (
            <div key={index} className="flex items-center space-x-4">
              <SkeletonUi className="h-4 w-[250px]" />
              <SkeletonUi className="h-4 w-[200px]" />
            </div>
          ),
        )}
    </SkeletonContainer>
  )
}

export function SkeletonCard({ count = 3 }: CardProps) {
  return (
    <SkeletonContainer>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <SkeletonUi className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <SkeletonUi className="h-4 w-[250px]" />
              <SkeletonUi className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
    </SkeletonContainer>
  )
}
