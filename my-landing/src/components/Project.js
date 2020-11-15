import React from 'react'

const Project = props => {

    const { projectName, image, description, link, gitLink } = props

    return (
        <div>
            <div>
                <img src={image} alt={projectName}></img>
            </div>
            <div>
                <h3><a href={link}>{projectName}</a></h3>
                <p>{description}</p>
                <p><a href={gitLink}>Link to code.</a></p>
            </div>
        </div>
    )
}

export default Project