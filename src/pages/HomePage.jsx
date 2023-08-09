import classes from './HomePage.module.css'
const HomePage = props => {
    return (<>
        <h1 className={classes.heading}>Hello from Yuvi's Todo App</h1>
      
            <p className={classes.quote}> "Embrace each day with purpose and commitment.</p>
            <p className={classes.quote}> Your to-do list isn't just a collection of tasks; it's a roadmap to your aspirations.</p>
            <p className={classes.quote}> By conquering your to-dos, you're not just completing chores – you're nurturing the future you desire."</p>
        
        
        </>
    )
}

export default HomePage;