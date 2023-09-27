import {rest} from 'msw'
export const handlers=[
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        
    
        // If authenticated, return a mocked user details
        return res(
          ctx.status(200),
          ctx.json([
                {
                    name: 'admin',
                  }
            ]
          ),
        )
      }),
]