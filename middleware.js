export function middleware(req) {
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const [, base64] = basicAuth.split(' ')
    const [user, pass] = Buffer.from(base64, 'base64').toString().split(':')
    if (pass === '102030') {
      return new Response(null, { status: 200 })
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="TezTruck Calc"' },
  })
}

export const config = {
  matcher: ['/calc/:path*'],
}
