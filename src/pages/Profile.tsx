import React from 'react'
import ProfileTabs from '../customComponents/ProfileTabs'
import Layout from '../customComponents/Layout'
import Title from 'antd/es/typography/Title'

const Profile = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-start mt-10">
        <Title level={2}>My Account</Title>
        
        <div className="w-full flex justify-center">
          <div className="max-w-2xl w-full">
            <ProfileTabs />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
