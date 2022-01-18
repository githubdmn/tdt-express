
// MongoDB document model
export default interface LoginModel {
 id: string;
 email: string;
 password: string;
 lastLogin: Date;
 lastLogout: Date;
 userAgent: string;
 refreshToken: string;
}
