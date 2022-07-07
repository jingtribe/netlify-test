import * as React from 'react'

import { useTranslation } from 'react-i18next'
import { Typography } from 'unsafe-bc-react-components'

export function WebComponents(): React.ReactElement {
  const { t } = useTranslation()
  return (
    <div>
      <Typography as="h1" variant="display">
        {t('Webcomponents')}
      </Typography>
      <bc-product-card slug="kinda-care-kinda-dont-graphic-tee-45z45o">
        <bc-add-to-cart slot="button" cartId="bc_cartId"></bc-add-to-cart>
      </bc-product-card>
    </div>
  )
}
