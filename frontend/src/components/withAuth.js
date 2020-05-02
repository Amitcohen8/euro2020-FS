// import React, { useState, useEffect } from 'react'
// import { Redirect, Route } from 'react-router-dom'


// export const ProtectedRoute = ({ component: Component, ...rest }) => {
//     const [state, setState] = useState({
//         loading: true,
//         redirect: false
//     })

//     const checkAuth = () => {
//         fetch('/users/checkToken').then(res => {
//             console.log('4', res.status)
//             if (res.status === 200) {
//                 setState({ ...state, loading: false })
//             } else {
//                 const error = new Error(res.error)
//                 throw error
//             }
//         }
//         ).catch(err => {
//             console.error(err)
//             setState({ loading: false, redirect: true })
//         })

//     }
//     useEffect(() => {
//         checkAuth()
//     }, [])

//     const { loading, redirect } = state


//     if (loading) {
//         return null
//     }

//     return <Route
//         {...rest}
//         render={props => {
//             if (redirect) {
//                 return <Redirect to={
//                     {
//                         pathname: "/",
//                         state: {
//                             from: props.location
//                         }
//                     }
//                 }
//                 />
//             }
//             else {
//                 return <Component {...props} />
//             }

//         }}
//     />

// }



