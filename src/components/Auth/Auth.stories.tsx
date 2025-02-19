import React, { useState } from 'react'
import { Auth } from './'
import { createClient } from '@supabase/supabase-js'
// @ts-ignore
import { Typography, Button, Space } from '../../index'

const supabase = createClient(
  'https://imdvvfcbtrfewysxgrnr.supabase.co',

  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDMzNzg3MSwiZXhwIjoxOTI5OTEzODcxfQ.O7Ck0RFbXxsJ9BpxdAuey5O_MJcC_lHM06xDYKTbWxg'
)

export default {
  title: 'Auth/Auth',
  component: Auth,
}

const Container = (props: any) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export const Default = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withAllSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withSocialLargeButtons = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withColouredSocialAuth = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const withSocialAuthHorizontal = (args: any) => (
  <Auth.UserContextProvider {...args}>
    <Container {...args}>
      <Auth {...args} />
    </Container>
  </Auth.UserContextProvider>
)
export const updatePassword = (args: any) => <Auth.UpdatePassword {...args} />

export const ChangeViewState = (args: any) => {
  const [view, setView] = useState<
    'sign_in' | 'sign_up' | 'forgotten_password' | 'magic_link'
  >('sign_in')

  return (
    <div>
      <Space>
        <Button
          type={view === 'sign_up' ? 'primary' : 'default'}
          onClick={() => setView('sign_up')}
        >
          Sign up
        </Button>
        <Button
          type={view === 'sign_in' ? 'primary' : 'default'}
          onClick={() => setView('sign_in')}
        >
          Sign in
        </Button>
        <Button
          type={view === 'forgotten_password' ? 'primary' : 'default'}
          onClick={() => setView('forgotten_password')}
        >
          Forgotten password
        </Button>
        <Button
          type={view === 'magic_link' ? 'primary' : 'default'}
          onClick={() => setView('magic_link')}
        >
          Magic link
        </Button>
      </Space>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Container supabaseClient={supabase}>
          <Auth supabaseClient={supabase} view={view} />
        </Container>
      </Auth.UserContextProvider>
    </div>
  )
}

Default.args = {
  supabaseClient: supabase,
}

withSocialAuth.args = {
  supabaseClient: supabase,
  providers: ['facebook', 'google'],
}

withAllSocialAuth.args = {
  supabaseClient: supabase,
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket'],
}

withSocialLargeButtons.args = {
  supabaseClient: supabase,
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket'],
  socialButtonSize: 'large',
}

withColouredSocialAuth.args = {
  supabaseClient: supabase,
  socialColors: true,
  providers: ['facebook', 'google', 'github', 'gitlab', 'bitbucket'],
}

withSocialAuthHorizontal.args = {
  supabaseClient: supabase,
  providers: ['facebook', 'google'],
  socialLayout: 'horizontal',
}

updatePassword.args = {
  supabaseClient: supabase,
}
