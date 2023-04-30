import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Spinner } from '../../components'
import { getProfile } from '../../connect/profile/request'

import TeamDetailView from './team-detail-view'

const TeamDetailController = ({ location }) => {
  const [profile, setProfile] = useState({})
  const slug = _.last(_.compact(_.split(location.pathname, '/')))
  useEffect(() => {
    getProfile(slug).then((response) => {
      setProfile(_.get(response, 'data.perfilCollection.items[0]'))
    })
  }, [slug])

  if (_.isEmpty(profile)) {
    return <Spinner />
  }

  return (
    <TeamDetailView profile={profile}/>
  )
}

export default TeamDetailController
