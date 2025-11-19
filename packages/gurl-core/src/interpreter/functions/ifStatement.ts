import { IfStatement } from "../../ast/nodes"

export default function (node: IfStatement){
    const cond = this.eval(node.condition)

    if (cond) {
        let result 
        for (const st of node.thenBranch){
            result = this.eval(st)
        }
        return result
    } else if (node.elseBranch){
        let result;

        for(const st of node.thenBranch){
            result = this.eval(st)
        }
        return result
    }
    return null
}