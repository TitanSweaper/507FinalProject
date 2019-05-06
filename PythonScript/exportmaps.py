import arcpy
mxd = arcpy.mapping.MapDocument(r"E:\Save_Files\Geog_507_mapdesignandpresentation\FinalProject\Website\ArcMapDocuments\USmining.mxd")
df = arcpy.mapping.ListDataFrames(mxd)
for layers in df:
    #print layers
    value= r"E:\Save_Files\Geog_507_mapdesignandpresentation\FinalProject\Website\images\SandandGravel\%s.gif" % (layers.name)
    mxd.activeDataFrame.panToExtent(layers.name)
    arcpy.mapping.ExportToGIF(mxd,value,layers,df_export_width=1062,
                          df_export_height=509)