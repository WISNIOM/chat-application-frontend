export type Conversation = {
    id: number;
    name: string;
    lastMessage: string;
};

export type CreateUserParams = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
};

export type UserCredentialsParams = {
    email: string;
    password: string;
};

export type Profile = {
    id: number;
    about?: string;
    avatar?: string;
    banner?: string;
};

export type UserPresence = {
    id: number;
    statusMessage?: string;
    showOffline: boolean;
};

export type UserPeer = {
    id: string;
};

export type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    profile?: Profile;
    presence?: UserPresence;
    peer: UserPeer;
};