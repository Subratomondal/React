import React from 'react'

function Card() {

  const data =[
    {image: 'https://images.unsplash.com/photo-1522780550166-284a0288c8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D', name: "Amazon Basics", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi quisquam rem!",instock:true},
    {image:'https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Daily Products", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi quisquam rem!",instock:false},
    {image: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:"Apple", description: "Lorem ipsum, dolor",instock:false}
  ]

  return (
    <div className='w-full h-screen flex items-center justify-center gap-10  bg-zinc-200'>
        {data.map((elem, index)=>(
          <div key={index} className=' w-52 bg-zinc-100  rounded-md overflow-hidden'>
          <div className='w-full h-32 bg-zinc-300'>
              <img className='w-full h-full object-cover' 
              src={elem.image} 
              alt="" />
          </div>
          <div className='w-full px-3 py-4'>
              <h2 className='font-semibold'>{elem.name}</h2>
              <p className='text-xs mt-3'>
                {elem.description}
              </p>
              <button className={`px-4 py-1 ${elem.instock?'bg-sky-600':'bg-red-600'} text-xs rounded text-zinc-100`}>
                {elem.instock?"In Stock":"Out of Stock"}
                </button>
          </div>
      </div>
          
        ))}
    </div>
  )
}

export default Card
