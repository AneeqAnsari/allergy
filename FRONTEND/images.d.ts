declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module "*.jpeg" {
    const value: any;
    export default value;
}

declare module "*.gif" {
    const value: any;
    export default value;
}

declare module "*.svg" {
    const value: any;
    export default value;
}


// “Whenever I import a file that ends with .png, treat it as a module that exports something
//  (of type any). I don’t care about the exact type — just don’t throw an error.”


// So when you do:

// import avatar from './avatar.png';


// TypeScript says:
// ✅ “OK, that’s allowed. avatar is of type any, so I won’t complain.”