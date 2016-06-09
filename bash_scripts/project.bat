@echo off

set pname=%1
set ejversion=%2
set ejpath=C:\Program Files (x86)\Syncfusion\Essential Studio\%ejversion%\JavaScript\assets

if exist "%ejpath%" (    
    md %pname%
    cd %pname% 
    md %ejversion%
    cd %ejversion%
    md scripts
    md themes 
    xcopy /s /z /y "%ejpath%\scripts" scripts
    xcopy /s /z /y "%ejpath%\css" themes
) else (
echo Specified version is not found in this machine, please install %ejversion% or whether you entered the correct version and try again
)
