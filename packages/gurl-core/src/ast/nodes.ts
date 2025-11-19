export type ASTNode =
  | Program
  | LetStatement
  | IfStatement
  | Identifier
  | NumberLiteral
  | BinaryExpression
  | ConstStatement
  | StringLiteral
  | LogStatement
  | ExpressionStatement;

export interface Program {
  type: "Program";
  body: ASTNode[];
}

export interface LetStatement {
  type: "LetStatement";
  name: Identifier;
  value: ASTNode;
}

export interface LogStatement{
  type: "LogStatemenet";
  expression:ASTNode;
}

export interface ConstStatement{
    type:"ConstStatement";
    name: Identifier;
    value:ASTNode
}

export interface IfStatement{
  type:"IfStatement";
  condition:ASTNode;
  thenBranch:ASTNode[];
  elseBranch:ASTNode[] | null;
}
export interface Identifier {
  type: "Identifier";
  name: string;
}

export interface NumberLiteral {
  type: "NumberLiteral";
  value: number;
}

export interface StringLiteral{
  type: "StringLiteral"
  value: string;
}

export interface BinaryExpression {
  type: "BinaryExpression";
  left: ASTNode;
  operator: string;
  right: ASTNode;
}

export interface ExpressionStatement {
  type: "ExpressionStatement";
  expression: ASTNode;
}
