import React from 'react'
import BottomBar from '../bottomBar/BottomBar'
import ListGroup from '../listGroup/ListGroup'
import TopNav from '../topNav/TopNav'
import AddItem from '../addItem/AddItem'
import OverlayII from '../overlayII/OverlayII'



function Home() {
  return (
    <div>
<TopNav/>


<ListGroup/>

<OverlayII>

<AddItem/>
</OverlayII>



<BottomBar/>


    </div>
  )
}

export default Home