-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2023 at 08:50 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!40101 SET NAMES utf8mb4 */
;

--
-- Database: `class_diagram`
--
-- --------------------------------------------------------
--
-- Table structure for table `users`
--
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- Adding files table for files 
CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `file` varchar(60000) NOT NULL,
  `errors` varchar(60000) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO
  `files` (`id`, `email`, `file`, `errors`)
VALUES
  (1, 'example@gmail.com', '', ''),
  (2, 'examplee@gmail.com', '', ''),
  (
    3,
    'sirajmuneerfsd1@gmail.com',
    '<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2023-05-14T06:46:47.975Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36" etag="zMHR9QgFbov48bK2WFqx" version="21.2.9" type="device">
  <diagram id="C5RBs43oDa-KdzZeNtuy" name="Page-1">
    <mxGraphModel dx="1167" dy="637" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-0" />
        <mxCell id="WIyWlLk6GJQsqaUBKTNV-1" parent="WIyWlLk6GJQsqaUBKTNV-0" />
        <mxCell id="FWSilQwLTp85TEebJiF9-0" value="Login" style="swimlane;fontStyle=2;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="9" y="69" width="161" height="221" as="geometry">
            <mxRectangle x="230" y="140" width="160" height="26" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-1" value="-userName: String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-0" vertex="1">
          <mxGeometry y="26" width="161" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-2" value="-password: String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-0" vertex="1">
          <mxGeometry y="52" width="161" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-3" value="-loginType: String&#xa;" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-0" vertex="1">
          <mxGeometry y="78" width="161" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-4" value="" style="line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-0" vertex="1">
          <mxGeometry y="104" width="161" height="8" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-6" value="+verifyUser():int" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-0" vertex="1">
          <mxGeometry y="112" width="161" height="26" as="geometry" />
        </mxCell>
        <mxCell id="ohCFyRFxD2OdbYcdxPZa-0" value="+addNewUser():int" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-0" vertex="1">
          <mxGeometry y="138" width="161" height="26" as="geometry" />
        </mxCell>
        <mxCell id="ohCFyRFxD2OdbYcdxPZa-1" value="+Validate(String, String):int" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-0" vertex="1">
          <mxGeometry y="164" width="161" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-7" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0;entryY=0.5;entryDx=0;entryDy=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" source="FWSilQwLTp85TEebJiF9-11" target="FWSilQwLTp85TEebJiF9-20" edge="1">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="639" y="150" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-8" value="maintains" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-7" vertex="1" connectable="0">
          <mxGeometry x="-0.0977" y="-1" relative="1" as="geometry">
            <mxPoint x="8" y="-9" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-9" value="1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-7" vertex="1" connectable="0">
          <mxGeometry x="-0.8749" y="-3" relative="1" as="geometry">
            <mxPoint x="-2" y="-11" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-10" value="1..*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-7" vertex="1" connectable="0">
          <mxGeometry x="0.7899" y="1" relative="1" as="geometry">
            <mxPoint x="-2" y="-7" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-11" value="Admin" style="swimlane;fontStyle=0;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="310" y="60" width="201" height="164" as="geometry">
            <mxRectangle x="550" y="140" width="160" height="26" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-12" value="-adminId: integer" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-11" vertex="1">
          <mxGeometry y="26" width="201" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-13" value="-email: String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-11" vertex="1">
          <mxGeometry y="52" width="201" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-14" value="-fullName: String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-11" vertex="1">
          <mxGeometry y="78" width="201" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-15" value="" style="line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-11" vertex="1">
          <mxGeometry y="104" width="201" height="8" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-16" value="+addRule(): String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-11" vertex="1">
          <mxGeometry y="112" width="201" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-17" value="CFG_Rules" style="swimlane;fontStyle=0;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="670" y="60" width="179" height="190" as="geometry">
            <mxRectangle x="230" y="140" width="160" height="26" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-18" value="-user_id: integer" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-17" vertex="1">
          <mxGeometry y="26" width="179" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-19" value="-listType: String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-17" vertex="1">
          <mxGeometry y="52" width="179" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-20" value="-rulesList: String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-17" vertex="1">
          <mxGeometry y="78" width="179" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-21" value="" style="line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-17" vertex="1">
          <mxGeometry y="104" width="179" height="8" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-22" value="+writeInCFG():int" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-17" vertex="1">
          <mxGeometry y="112" width="179" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-23" value="+validateRules():int" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-17" vertex="1">
          <mxGeometry y="138" width="179" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-24" value="+implementRule(): String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-17" vertex="1">
          <mxGeometry y="164" width="179" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-25" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=1;entryDx=0;entryDy=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" source="FWSilQwLTp85TEebJiF9-33" target="FWSilQwLTp85TEebJiF9-0" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="79" y="240" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-26" value="has" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-25" vertex="1" connectable="0">
          <mxGeometry x="-0.2819" y="1" relative="1" as="geometry">
            <mxPoint y="-13" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-27" value="1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-25" vertex="1" connectable="0">
          <mxGeometry x="-0.92" y="-1" relative="1" as="geometry">
            <mxPoint x="14" y="-9" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-28" value="1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-25" vertex="1" connectable="0">
          <mxGeometry x="0.9067" y="1" relative="1" as="geometry">
            <mxPoint x="11" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-29" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=1.012;entryY=0.854;entryDx=0;entryDy=0;entryPerimeter=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" source="FWSilQwLTp85TEebJiF9-33" target="FWSilQwLTp85TEebJiF9-47" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-30" value="1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-29" vertex="1" connectable="0">
          <mxGeometry x="-0.8944" y="1" relative="1" as="geometry">
            <mxPoint x="8" y="7" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-31" value="0..*" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-29" vertex="1" connectable="0">
          <mxGeometry x="0.844" y="1" relative="1" as="geometry">
            <mxPoint x="-4" y="9" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-32" value="validates" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-29" vertex="1" connectable="0">
          <mxGeometry x="-0.2047" y="1" relative="1" as="geometry">
            <mxPoint x="-7" y="9" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-33" value="User" style="swimlane;fontStyle=0;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="340" y="320" width="199" height="320" as="geometry">
            <mxRectangle x="550" y="140" width="160" height="26" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-34" value="-userId: integer" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="26" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-35" value="-userName: string" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="52" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-36" value="-fullName: string" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="78" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-37" value="" style="line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="104" width="199" height="8" as="geometry" />
        </mxCell>
        <mxCell id="ohCFyRFxD2OdbYcdxPZa-2" value="+login(String, String): String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="112" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="ohCFyRFxD2OdbYcdxPZa-3" value="+validateCredentials():int" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="138" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-38" value="+register(string, string): void" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="164" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-39" value="+inputDiagram(): String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="190" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-40" value="+convertToString(): String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="216" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-41" value="+validateString():int" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="242" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-42" value="+generateParseTree(string): String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="268" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-43" value="+generateSkeletonCode():String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-33" vertex="1">
          <mxGeometry y="294" width="199" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-44" value="Errors" style="swimlane;fontStyle=0;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="9" y="550" width="210" height="220" as="geometry">
            <mxRectangle x="550" y="140" width="160" height="26" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-45" value="-userId: integer" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-44" vertex="1">
          <mxGeometry y="26" width="210" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-46" value="-errorList: String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-44" vertex="1">
          <mxGeometry y="52" width="210" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-47" value="-listType: String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-44" vertex="1">
          <mxGeometry y="78" width="210" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-48" value="" style="line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-44" vertex="1">
          <mxGeometry y="104" width="210" height="8" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-49" value="+showErrors():String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-44" vertex="1">
          <mxGeometry y="112" width="210" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-50" value="+checkSemanticError(string): string" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-44" vertex="1">
          <mxGeometry y="138" width="210" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-51" value="+checkSyntaxError(string): string" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-44" vertex="1">
          <mxGeometry y="164" width="210" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-52" value="User_Profile" style="swimlane;fontStyle=0;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;rounded=0;shadow=0;strokeWidth=1;" parent="WIyWlLk6GJQsqaUBKTNV-1" vertex="1">
          <mxGeometry x="630" y="566" width="152" height="204" as="geometry">
            <mxRectangle x="550" y="140" width="160" height="26" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-53" value="-userId: integer" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-52" vertex="1">
          <mxGeometry y="26" width="152" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-54" value="-profileType: string" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-52" vertex="1">
          <mxGeometry y="52" width="152" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-55" value="-profileRecord: string" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rounded=0;shadow=0;html=0;" parent="FWSilQwLTp85TEebJiF9-52" vertex="1">
          <mxGeometry y="78" width="152" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-56" value="" style="line;html=1;strokeWidth=1;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-52" vertex="1">
          <mxGeometry y="104" width="152" height="8" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-57" value="+viewErrors(): String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-52" vertex="1">
          <mxGeometry y="112" width="152" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-58" value="+deleteErros(): String" style="text;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;" parent="FWSilQwLTp85TEebJiF9-52" vertex="1">
          <mxGeometry y="138" width="152" height="26" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-59" value="&amp;nbsp;+saveError(): String" style="text;whiteSpace=wrap;html=1;" parent="FWSilQwLTp85TEebJiF9-52" vertex="1">
          <mxGeometry y="164" width="152" height="40" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-60" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.001;entryY=0.804;entryDx=0;entryDy=0;entryPerimeter=0;startArrow=classic;startFill=1;endArrow=none;endFill=0;" parent="WIyWlLk6GJQsqaUBKTNV-1" source="FWSilQwLTp85TEebJiF9-3" target="FWSilQwLTp85TEebJiF9-14" edge="1">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="234" y="160" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-61" value="1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-60" vertex="1" connectable="0">
          <mxGeometry x="-0.8281" y="2" relative="1" as="geometry">
            <mxPoint y="-6" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-62" value="has" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-60" vertex="1" connectable="0">
          <mxGeometry x="-0.1801" relative="1" as="geometry">
            <mxPoint x="12" y="-11" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-63" value="1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-60" vertex="1" connectable="0">
          <mxGeometry x="0.7637" y="-2" relative="1" as="geometry">
            <mxPoint x="4" y="-11" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-64" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" parent="WIyWlLk6GJQsqaUBKTNV-1" source="FWSilQwLTp85TEebJiF9-36" target="FWSilQwLTp85TEebJiF9-52" edge="1">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-65" value="1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-64" vertex="1" connectable="0">
          <mxGeometry x="-0.9147" y="1" relative="1" as="geometry">
            <mxPoint x="-8" y="-12" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-66" value="maintains" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-64" vertex="1" connectable="0">
          <mxGeometry x="-0.0095" y="-1" relative="1" as="geometry">
            <mxPoint x="-24" y="-12" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="FWSilQwLTp85TEebJiF9-67" value="1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" parent="FWSilQwLTp85TEebJiF9-64" vertex="1" connectable="0">
          <mxGeometry x="0.9011" y="-1" relative="1" as="geometry">
            <mxPoint x="8" as="offset" />
          </mxGeometry>
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
',
    ''
  );

--
-- Dumping data for table `users`
--
INSERT INTO
  `users` (`id`, `email`, `password`)
VALUES
  (1, 'example@gmail.com', 'a1'),
  (2, 'examplee@gmail.com', 'asdfasdfA1!'),
  (3, 'ahmadyasir1@gmate.com', 'asdasdasdA@1');

--
-- Indexes for dumped tables
--
--
-- Indexes for table `users`
--
ALTER TABLE
  `users`
ADD
  PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE
  `users`
MODIFY
  `id` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 4;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;