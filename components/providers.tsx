/* eslint-disable @typescript-eslint/unbound-method */
'use client'

import React from 'react'
import { I18nProvider } from 'react-aria-components'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <I18nProvider locale={'en-US'}>{children}</I18nProvider>
}
