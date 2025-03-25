"use client";
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import React from 'react'

function HeaderProfileBtn() {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>
        {/* @ts-expect-error Server Component */}
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  )
}

export default HeaderProfileBtn
