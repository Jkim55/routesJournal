import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from "../actions/fetch_posts";
import _ from 'lodash'

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  componentDidUpdate(){
    setTimeout(() => console.log('Hello, friend!'), 15) // try a setTimeout instead. :(
  }

  componentWillUnmount(){
    console.log('Time for yoga. Byeeeeeeee!')  // this works on a true spa ... unlike Beacon
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new" onClick={() => this.create_mark("startCrossPage")} >
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }

  create_mark(name) {
    console.log(`CREATING MARK FOR: ${name}`)
    performance.mark !== undefined ? performance.mark(name): console.log("performance.mark Not supported")
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item'>
          {`${post.title} - ${post.content}`}
        </li>
      )
    })
  }
}

function mapStateToProps(state){
  return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
