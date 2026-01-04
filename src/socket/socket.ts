import { io, Socket } from "socket.io-client";

interface UserAuthData {
    userId: string;
    email: string;
}

export class SocketConnection {
    private static socket: Socket | undefined;

    private constructor() { }

    public static getInstance(): Socket | undefined {
        return SocketConnection.socket;
    }

    public static connect(authData: UserAuthData): Socket {
        if (SocketConnection.socket?.connected) {
            SocketConnection.socket.disconnect();
        }

        SocketConnection.socket = io("http://localhost:5000", {
            transports: ["websocket"],
            auth: {
                userId: authData.userId,
                email: authData.email,
            },
        });

        SocketConnection.socket.on("connect", () => {
            console.log("Socket connected with userId:", authData.userId);
        });

        SocketConnection.socket.on("disconnect", (reason) => {
            console.log("Socket disconnected:", reason);
        });

        return SocketConnection.socket;
    }

    public static emit<T>(event: string, data: T) {
        if (SocketConnection.socket?.connected) {
            SocketConnection.socket.emit(event, data);
        } else {
            console.warn("Socket not connected. Cannot emit event:", event);
        }
    }

    public static on<T>(event: string, callback: (data: T) => void) {
        if (SocketConnection.socket) {
            SocketConnection.socket.on(event, callback);
        }
    }

    public static off(event: string) {
        if (SocketConnection.socket) {
            SocketConnection.socket.off(event);
        }
    }

    public static disconnect() {
        if (SocketConnection.socket) {
            SocketConnection.socket.disconnect();
            SocketConnection.socket = undefined;
            console.log("Socket disconnected and cleared");
        }
    }

    public static isConnected(): boolean {
        return SocketConnection.socket?.connected ?? false;
    }
}
