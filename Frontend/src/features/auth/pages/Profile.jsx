//File: src/features/auth/pages/Profile.jsx 

import { useState } from  "react";
import { User, Mail, Shield, Calendar, Edit3 } from "lucide-react";

import { useAuth } from "../hooks/useAuth";
import { useCurrentUser} from "../hooks/useCurrentUser";

import AuthCard from "../components/AuthCard";

import Button from "../../../components/forms/Button";
import Avatar from "../../../components/common/Avatar";
import Badge from "../../../components/common/Badge";
import Alert from "../../../components/common/Alert";
import Loader from "../../../components/common/Loader";

import "../styles/auth.css";

const Profile = () => {
    const { user } = useAuth();

    const {
        currentUser,
        loading,
        error,
        refresh,
    } = useCurrentUser();

    const [editing, seEditing] = useState(false);

    const profile = currentUser || User;

    if (loading) {
        return (
            <div className="auth-page">
                <Loader text="Loading Profile..." />
            </div>
        );
    }

    if (error) {
        return (
            <div className="auth-page">
                <Alert 
                    type="error"
                    message={error}
                    action={
                        <Button 
                            variant="secondary"
                            onClick={refetch}
                        >
                            Retry
                        </Button>
                    }
                />
            </div>
        );
    }

    return (
        <div className="auth-page">
            <AuthCard className="profile-card">
                <div className="profile-header">
                    <Avatar 
                        src={profile?.avatar}
                        alt={profile?.fullName}
                        size="x1"
                    />

                    <div className="profile-header-info">
                        <h2>{profile?.fullName}</h2>

                        <Badge variant="primary">
                            {profile?.role || "User"}
                        </Badge>
                    </div>

                    <Button 
                        variant="outline"
                        startIcon={<Edit3 size={18} />}
                        onClick={() => seetEditing((prev) => !prev)}
                    >
                        {editing ? "Cancel" : "Edit Profile"}
                    </Button>
                </div>

                <div className="profile-details">
                    <div className="profile-item">
                        <Mail size={18} />

                        <div>
                            <label>Email</label>
                            <p>{profile?.email}</p>
                        </div>
                    </div>

                    <div className="profile-item">
                        <Shield size={18} />

                        <div>
                            <label>Role</label>
                            <p>{profile?.role || "User"}</p>
                        </div>
                    </div>

                    <div className="profile-item">
                        <Calendar size={18} />

                        <div>
                            <label>Member Since</label>
                            <p>
                                {profile?.createdAt
                                    ? new Date(profile.createdAt).toLocaleDateString()
                                    : "-"}
                            </p>
                        </div>
                    </div>
                </div>

                {editing && (
                    <div className="profile-edit-placeholder">

                        {/* Replace with <ProfileForm /> */}
                        <Alert 
                            type="info"
                            message="Profile editing component coming soon."
                        />

                    </div>
                )}
            </AuthCard>
        </div>
    );
};

export default Profile;

