import React, { useState, useEffect } from 'react'
import useContent from '../hooks/useContent'
import useSelectionFilter from '../hooks/useSelectionFilter'
import SelectUserProfile from '../containers/profiles';
import BrowseContainer from '../containers/browse';
import { getAuth } from "firebase/auth"

function Browse() {
    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = useSelectionFilter({ series, films })
    const [profile, setProfile] = useState({})

    const auth = getAuth();
    const user = auth.currentUser || ""

    return (
        <div style={{ color: "white" }}>
            {profile.displayName ? <BrowseContainer user={user} /> : <SelectUserProfile user={user} setProfile={setProfile} />}
        </div>
    )
}

export default Browse