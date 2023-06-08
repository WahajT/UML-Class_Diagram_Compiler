/* eslint-disable */
import { ReactDom } from 'react'
import React from 'react'

class GraphTest extends React.Component {

    constructor(props) {
        super(props);
        this.graphHolder = React.createRef();
    }

    componentDidMount() {
        let xmlString = '<mxGraphModel dx="116" dy="608" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100"><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="Template" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#00ACC1;strokeWidth=5;glass=0;comic=0;gradientColor=#b2ebf2;fillColor=#e0f7fa;fontSize=16;fontColor=#000000;" vertex="1" parent="1"><mxGeometry x="210" y="120" width="200" height="120" as="geometry"/></mxCell><mxCell id="3" value="Sub-Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ffb74d;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#fff3e0;fillColor=#FFFFFF;" vertex="1" parent="1"><mxGeometry x="210" y="260" width="200" height="120" as="geometry"/></mxCell><mxCell id="4" value="End" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fontFamily=Helvetica;fontSize=16;fillColor=#ffebee;strokeColor=#f44336;strokeWidth=4;gradientColor=#ffcdd2;" vertex="1" parent="1"><mxGeometry x="240" y="400" width="80" height="80" as="geometry"/></mxCell><mxCell id="5" value="Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ff9800;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#ffe0b2;fillColor=#fff3e0;" vertex="1" parent="1"><mxGeometry x="240" y="500" width="200" height="120" as="geometry"/></mxCell><mxCell id="6" value="Start" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fontFamily=Helvetica;fontSize=16;fillColor=#e8f5e9;strokeColor=#4caf50;strokeWidth=4;gradientColor=#c8e6c9;" vertex="1" parent="1"><mxGeometry x="270" y="640" width="80" height="80" as="geometry"/></mxCell><mxCell id="7" value="Start" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fontFamily=Helvetica;fontSize=16;fillColor=#e8f5e9;strokeColor=#4caf50;strokeWidth=4;gradientColor=#c8e6c9;" vertex="1" parent="1"><mxGeometry x="270" y="740" width="80" height="80" as="geometry"/></mxCell><mxCell id="8" value="Documentation" style="shape=document;whiteSpace=wrap;html=1;boundedLbl=1;strokeWidth=4;strokeColor=#9C27B0;gradientColor=#E1BEE7;fillColor=#F3E5F5;fontSize=16;" vertex="1" parent="1"><mxGeometry x="270" y="840" width="200" height="120" as="geometry"/></mxCell><mxCell id="9" value="Sub-Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ffb74d;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#fff3e0;fillColor=#FFFFFF;" vertex="1" parent="1"><mxGeometry x="300" y="980" width="200" height="120" as="geometry"/></mxCell><mxCell id="10" value="Template" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#00ACC1;strokeWidth=5;glass=0;comic=0;gradientColor=#b2ebf2;fillColor=#e0f7fa;fontSize=16;fontColor=#000000;" vertex="1" parent="1"><mxGeometry x="330" y="1120" width="200" height="120" as="geometry"/></mxCell><mxCell id="11" value="Decision" style="rhombus;whiteSpace=wrap;html=1;rounded=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#333333;strokeWidth=4;fillColor=#eeeeee;gradientColor=#e5e5e5;fontFamily=Helvetica;fontSize=16;fontColor=#000000;align=center;" vertex="1" parent="1"><mxGeometry x="360" y="1260" width="200" height="120" as="geometry"/></mxCell><mxCell id="12" value="End" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fontFamily=Helvetica;fontSize=16;fillColor=#ffebee;strokeColor=#f44336;strokeWidth=4;gradientColor=#ffcdd2;" vertex="1" parent="1"><mxGeometry x="390" y="1400" width="80" height="80" as="geometry"/></mxCell><mxCell id="13" value="Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ff9800;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#ffe0b2;fillColor=#fff3e0;" vertex="1" parent="1"><mxGeometry x="390" y="1500" width="200" height="120" as="geometry"/></mxCell><mxCell id="14" value="Documentation" style="shape=document;whiteSpace=wrap;html=1;boundedLbl=1;strokeWidth=4;strokeColor=#9C27B0;gradientColor=#E1BEE7;fillColor=#F3E5F5;fontSize=16;" vertex="1" parent="1"><mxGeometry x="420" y="1640" width="200" height="120" as="geometry"/></mxCell><mxCell id="15" value="Phase" style="swimlane;html=1;horizontal=0;swimlaneLine=0;rounded=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#000000;strokeWidth=4;fillColor=#26C6DA;gradientColor=#00ACC1;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;gradientDirection=east;spacing=0;spacingTop=-4;swimlaneFillColor=none;collapsible=0;" vertex="1" parent="1"><mxGeometry x="450" y="1780" width="1020" height="200" as="geometry"/></mxCell><mxCell id="16" value="Phase" style="swimlane;html=1;horizontal=0;swimlaneLine=0;rounded=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#000000;strokeWidth=4;fillColor=#26C6DA;gradientColor=#00ACC1;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;gradientDirection=east;spacing=0;spacingTop=-4;swimlaneFillColor=none;collapsible=0;" vertex="1" parent="1"><mxGeometry x="480" y="2000" width="1020" height="200" as="geometry"/></mxCell><mxCell id="17" value="Phase" style="swimlane;html=1;horizontal=0;swimlaneLine=0;rounded=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#000000;strokeWidth=4;fillColor=#26C6DA;gradientColor=#00ACC1;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;gradientDirection=east;spacing=0;spacingTop=-4;swimlaneFillColor=none;collapsible=0;" vertex="1" parent="1"><mxGeometry x="510" y="2220" width="1020" height="200" as="geometry"/></mxCell><mxCell id="18" value="Phase" style="swimlane;html=1;horizontal=0;swimlaneLine=0;rounded=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#000000;strokeWidth=4;fillColor=#26C6DA;gradientColor=#00ACC1;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;gradientDirection=east;spacing=0;spacingTop=-4;swimlaneFillColor=none;collapsible=0;" vertex="1" parent="1"><mxGeometry x="540" y="2440" width="1020" height="200" as="geometry"/></mxCell><mxCell id="19" value="Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ff9800;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#ffe0b2;fillColor=#fff3e0;" vertex="1" parent="1"><mxGeometry x="570" y="2660" width="200" height="120" as="geometry"/></mxCell><mxCell id="20" value="Start" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fontFamily=Helvetica;fontSize=16;fillColor=#e8f5e9;strokeColor=#4caf50;strokeWidth=4;gradientColor=#c8e6c9;" vertex="1" parent="1"><mxGeometry x="600" y="2800" width="80" height="80" as="geometry"/></mxCell><mxCell id="21" value="Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ff9800;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#ffe0b2;fillColor=#fff3e0;" vertex="1" parent="1"><mxGeometry x="600" y="2900" width="200" height="120" as="geometry"/></mxCell><mxCell id="22" value="Action" style="rounded=1;whiteSpace=wrap;html=1;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#e91e63;strokeWidth=4;fillColor=#fce4ec;gradientColor=#f8bbd0;fontFamily=Helvetica;fontSize=16;fontColor=#000000;" vertex="1" parent="1"><mxGeometry x="630" y="3040" width="280" height="40" as="geometry"/></mxCell><mxCell id="23" value="Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ff9800;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#ffe0b2;fillColor=#fff3e0;" vertex="1" parent="1"><mxGeometry x="660" y="3100" width="200" height="120" as="geometry"/></mxCell><mxCell id="24" value="Sub-Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ffb74d;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#fff3e0;fillColor=#FFFFFF;" vertex="1" parent="1"><mxGeometry x="690" y="3240" width="200" height="120" as="geometry"/></mxCell><mxCell id="25" value="End" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fontFamily=Helvetica;fontSize=16;fillColor=#ffebee;strokeColor=#f44336;strokeWidth=4;gradientColor=#ffcdd2;" vertex="1" parent="1"><mxGeometry x="720" y="3380" width="80" height="80" as="geometry"/></mxCell><mxCell id="26" value="Decision" style="rhombus;whiteSpace=wrap;html=1;rounded=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#333333;strokeWidth=4;fillColor=#eeeeee;gradientColor=#e5e5e5;fontFamily=Helvetica;fontSize=16;fontColor=#000000;align=center;" vertex="1" parent="1"><mxGeometry x="720" y="3480" width="200" height="120" as="geometry"/></mxCell><mxCell id="27" value="Template" style="rounded=1;whiteSpace=wrap;html=1;strokeColor=#00ACC1;strokeWidth=5;glass=0;comic=0;gradientColor=#b2ebf2;fillColor=#e0f7fa;fontSize=16;fontColor=#000000;" vertex="1" parent="1"><mxGeometry x="750" y="3620" width="200" height="120" as="geometry"/></mxCell><mxCell id="28" value="Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ff9800;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#ffe0b2;fillColor=#fff3e0;" vertex="1" parent="1"><mxGeometry x="780" y="3760" width="200" height="120" as="geometry"/></mxCell><mxCell id="29" value="Start" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;fontFamily=Helvetica;fontSize=16;fillColor=#e8f5e9;strokeColor=#4caf50;strokeWidth=4;gradientColor=#c8e6c9;" vertex="1" parent="1"><mxGeometry x="810" y="3900" width="80" height="80" as="geometry"/></mxCell><mxCell id="30" value="Documentation" style="shape=document;whiteSpace=wrap;html=1;boundedLbl=1;strokeWidth=4;strokeColor=#9C27B0;gradientColor=#E1BEE7;fillColor=#F3E5F5;fontSize=16;" vertex="1" parent="1"><mxGeometry x="810" y="4000" width="200" height="120" as="geometry"/></mxCell><mxCell id="31" value="Phase" style="swimlane;html=1;horizontal=0;swimlaneLine=0;rounded=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#000000;strokeWidth=4;fillColor=#26C6DA;gradientColor=#00ACC1;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;gradientDirection=east;spacing=0;spacingTop=-4;swimlaneFillColor=none;collapsible=0;" vertex="1" parent="1"><mxGeometry x="840" y="4140" width="1020" height="200" as="geometry"/></mxCell><mxCell id="32" value="Action" style="rounded=1;whiteSpace=wrap;html=1;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#e91e63;strokeWidth=4;fillColor=#fce4ec;gradientColor=#f8bbd0;fontFamily=Helvetica;fontSize=16;fontColor=#000000;" vertex="1" parent="1"><mxGeometry x="870" y="4360" width="280" height="40" as="geometry"/></mxCell><mxCell id="33" value="Documentation" style="shape=document;whiteSpace=wrap;html=1;boundedLbl=1;strokeWidth=4;strokeColor=#9C27B0;gradientColor=#E1BEE7;fillColor=#F3E5F5;fontSize=16;" vertex="1" parent="1"><mxGeometry x="900" y="4420" width="200" height="120" as="geometry"/></mxCell><mxCell id="34" value="Phase" style="swimlane;html=1;horizontal=0;swimlaneLine=0;rounded=0;glass=0;comic=0;labelBackgroundColor=none;strokeColor=#000000;strokeWidth=4;fillColor=#26C6DA;gradientColor=#00ACC1;fontFamily=Helvetica;fontSize=16;fontColor=#FFFFFF;gradientDirection=east;spacing=0;spacingTop=-4;swimlaneFillColor=none;collapsible=0;" vertex="1" parent="1"><mxGeometry x="930" y="4560" width="1020" height="200" as="geometry"/></mxCell><mxCell id="35" value="Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ff9800;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#ffe0b2;fillColor=#fff3e0;" vertex="1" parent="1"><mxGeometry x="960" y="4780" width="200" height="120" as="geometry"/></mxCell><mxCell id="36" value="Sub-Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ffb74d;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#fff3e0;fillColor=#FFFFFF;" vertex="1" parent="1"><mxGeometry x="990" y="4920" width="200" height="120" as="geometry"/></mxCell><mxCell id="37" value="Process" style="shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;strokeColor=#ff9800;strokeWidth=4;perimeterSpacing=0;fontSize=16;gradientColor=#ffe0b2;fillColor=#fff3e0;" vertex="1" parent="1"><mxGeometry x="1020" y="5060" width="200" height="120" as="geometry"/></mxCell></root></mxGraphModel>';
        let newSterintg = ` <mxGraphModel dx="1167" dy="637" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
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
</mxGraphModel>`

        let str = this.props.xmlFile;
        str = str.substring(str.indexOf('<mxGraphModel') + 0);
        str = str.split('</mxGraphModel>', 1)[0] + "</mxGraphModel>"
        var graph = new mxGraph(this.graphHolder.current);
   
        var doc = mxUtils.parseXml(str);
        var codec = new mxCodec(doc);
        codec.decode(doc.documentElement, graph.getModel());
        graph.fit();
    }

    render() {
        return (
            <div>
                <h4>mxGraph Test</h4>
                <div id="holder" ref={this.graphHolder}></div>
            </div>
        )
    }
}

export default GraphTest
