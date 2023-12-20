export const navLinks = [
    {
        id : 1,
        text : 'Home',
        path : '/home',
        children : []
    },
    {
        id : 2,
        text : 'All Products',
        path : '/all-products',
        children : []
    },
    {
        id : 3,
        text : 'Women',
        path : '/women',
        children : [
            {
                id : 1,
                text : 'all',
                path : 'women/all',
            
            },
            {
                id : 2,
                text : 'dresses',
                path : 'women/dresses'
            },
            {
                id : 3,
                text : 'pants',
                path : 'women/pants'
            },
            {
                id : 4,
                text : 'skirts',
                path : 'women/skirts'
            }
        ]
    },
    {
        id : 4,
        text : 'Men',
        path : '/men',
        children : [
            {
                id : 1,
                text : 'all',
                path : 'men/all',
            
            },
            {
                id : 2,
                text : 'Hoodies',
                path : 'men/hoodies'
            },
            {
                id : 3,
                text : 'Shirts',
                path : 'men/shirts'
            },
            {
                id : 4,
                text : 'Pants',
                path : 'women/pants'
            }
        ]
    },
    {
        id : 5,
        text : 'Kids',
        path : '/kids',
        children : []
    }
   
]