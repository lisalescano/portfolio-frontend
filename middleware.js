// middleware.js (en la raíz, al mismo nivel que `app/`)
import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('🔵 MIDDLEWARE: ', request.nextUrl.pathname)
  
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.includes('/admin/login')) {
    
    const authCookie = request.cookies.get('adminAuthenticated')
    console.log('🟡 Cookie:', authCookie?.value)
    
    if (!authCookie || authCookie.value !== 'true') {
      console.log('🔴 Redirigiendo a login')
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}