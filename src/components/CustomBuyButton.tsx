import { Button as UIButton } from '@faststore/ui'
import { usePDP }  from "@faststore/core"

export function CustomBuyButton() {
  const context = usePDP()

  return (
    <UIButton
      variant="primary"
      onClick={() => {
        alert(`
        Product Name: ${context.data.product.isVariantOf.name}
        \nSKU Name:${context.data.product.name}
        \nSKU ID: ${context.data.product.id}
        `)
      }}
    >
        {context?.data?.product.customData}
      
    </UIButton>
  )
}
